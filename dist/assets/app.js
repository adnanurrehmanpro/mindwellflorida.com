'use strict';
const paths = {
  facilities: {
    eyebrow: 'A PARTNER IN YOUR COMMUNITY', heading: 'Psychiatric care, integrated into your care setting.',
    description: 'Physician-led evaluations, medication management, and thoughtful follow-up for post-acute and senior living communities.',
    filterLabel: 'Explore your care setting', cta: 'Discuss a facility partnership', journey: 'A straightforward path to partnership.',
    services: [
      {label: 'Rehabilitation', eyebrow: 'POST-ACUTE REHABILITATION', title: 'Support throughout recovery.', description: 'Psychiatric support considered alongside rehabilitation goals, physical health, and the transition to the next care setting.', items: ['Physician-led psychiatric evaluations', 'Medication review in the context of overall health', 'Coordination with rehabilitation and nursing teams'], foot: 'Coverage, scheduling, and referral workflows are discussed with each facility.'},
      {label: 'Skilled nursing', eyebrow: 'SKILLED NURSING FACILITIES', title: 'Continuity for complex needs.', description: 'Thoughtful psychiatric care for residents whose needs call for ongoing assessment and communication across a multidisciplinary team.', items: ['Psychiatric assessment and treatment planning', 'Ongoing medication management and follow-up', 'Communication with nursing and medical leadership'], foot: 'Services depend on clinical needs and the agreed facility care model.'},
      {label: 'Assisted living', eyebrow: 'ASSISTED LIVING COMMUNITIES', title: 'Care within a familiar community.', description: 'A physician-led approach that respects daily routines, resident preferences, and the people supporting each individual.', items: ['Evaluation of psychiatric care needs', 'Individualized medication care and follow-up', 'Coordination with the resident’s existing care team'], foot: 'Service area and availability are confirmed during the partnership discussion.'}
    ],
    steps: [['Discuss your community', 'Review the care setting, coverage needs, and partnership goals.'], ['Coordinate the workflow', 'Agree on scheduling, referrals, secure documentation, and team communication.'], ['Begin coordinated care', 'Establish physician-led visits and follow-up within the agreed care model.']],
    faqs: [
      ['Which facilities does Mind Well work with?', 'The care model is designed for post-acute rehabilitation centers, skilled nursing facilities, and assisted living communities. Specific service areas and coverage are confirmed during a partnership discussion.'],
      ['What does physician-led care mean?', 'A physician guides psychiatric evaluation and treatment planning, considering overall health and the care environment. Follow-up and communication help connect psychiatric care with the existing care team.'],
      ['How do referrals and records reach the practice?', 'Referral, scheduling, and documentation workflows are agreed with the facility. Resident records and other sensitive information should be shared only through the practice’s approved secure route.'],
      ['Can we discuss coverage before committing?', 'Yes. The initial conversation can cover your setting, desired coverage, and workflow needs. Availability and any partnership terms require direct confirmation with the practice.']
    ],
    interests: ['Facility psychiatric coverage', 'Referral and care coordination', 'Partnership workflow and scheduling'],
    resultTitle: 'Your partnership conversation', checklist: ['Confirm facility location and requested coverage.', 'Discuss scheduling and coordination with clinical leadership.', 'Agree on a secure route before sharing resident information.']
  },
  patients: {
    eyebrow: 'CARE FOR YOUR NEXT CHAPTER', heading: 'A clear beginning, at your own pace.',
    description: 'Explore outpatient psychiatric care, understand what a visit may involve, and prepare for a conversation with the practice.',
    filterLabel: 'Explore your care needs', cta: 'Request an appointment', journey: 'A clear path to getting started.',
    services: [
      {label: 'First evaluation', eyebrow: 'PSYCHIATRIC EVALUATIONS', title: 'Start with being heard.', description: 'An initial psychiatric assessment brings your concerns, health history, and goals into a conversation about appropriate next steps.', items: ['Time to discuss current concerns and history', 'Review of relevant health and treatment information', 'A discussion of treatment options and next steps'], foot: 'Clinical information belongs in the approved secure intake process.'},
      {label: 'Medication care', eyebrow: 'MEDICATION MANAGEMENT', title: 'Thoughtful decisions, together.', description: 'Psychiatric medication care includes reviewing current treatment, discussing concerns, and adjusting the plan when clinically appropriate.', items: ['Review of psychiatric medications and response', 'Discussion of benefits, side effects, and questions', 'Follow-up based on your individual care needs'], foot: 'Medication decisions require a clinical evaluation with your treating clinician.'},
      {label: 'Ongoing support', eyebrow: 'FOLLOW-UP CARE', title: 'A plan that can grow with you.', description: 'Follow-up visits provide an opportunity to review progress, consider changing needs, and maintain a clear treatment direction.', items: ['Review of symptoms, progress, and treatment goals', 'Continued medication review when appropriate', 'Coordination with other professionals involved in care'], foot: 'Therapy, counseling, and other services should be confirmed with the practice.'}
    ],
    steps: [['Ask about availability', 'Confirm appointment options, service area, and visit format.'], ['Confirm the practical details', 'Check fees and insurance participation before scheduling.'], ['Use secure intake', 'Share clinical information only through the approved intake route.']],
    faqs: [
      ['What can I expect at a first visit?', 'A psychiatric evaluation usually includes a conversation about current concerns, relevant health history, prior treatment, and goals. Your clinician uses that information to discuss appropriate next steps.'],
      ['Which insurance plans are accepted?', 'Network participation is still being confirmed. This website does not list any plan as accepted. Verify your specific plan, benefits, and any fees with the practice and your insurer before scheduling.'],
      ['Are virtual visits or appointments available?', 'Visit formats, appointment availability, age ranges served, and exact service areas must be confirmed directly with the practice. Contact appointments@mindwellflorida.com for availability. Contact the team for scheduling and secure intake instructions.'],
      ['Can I send medical information through this site?', 'Please use only the practice’s approved secure intake or referral process for records, diagnoses, medication lists, and other sensitive details. This website is not an urgent or emergency care channel.']
    ],
    interests: ['New patient appointment information', 'Insurance and fees', 'Visit formats and availability'],
    resultTitle: 'Your first-visit conversation', checklist: ['Confirm appointment availability, location, and visit format.', 'Verify insurance participation and any fees.', 'Request the secure intake route before sharing clinical details.']
  }
};
const $ = selector => document.querySelector(selector);
let audience = 'facilities';
let serviceIndex = 0;
let inquiryAudience = 'facilities';
let lastDialogTrigger = null;

function renderService(index) {
  serviceIndex = index;
  const service = paths[audience].services[index];
  $('#service-counter').textContent = `0${index + 1} / 03`;
  $('#service-eyebrow').textContent = service.eyebrow;
  $('#service-title').textContent = service.title;
  $('#service-description').textContent = service.description;
  $('#service-foot').textContent = service.foot;
  $('#service-list').replaceChildren(...service.items.map(item => {const li = document.createElement('li'); li.textContent = item; return li;}));
  document.querySelectorAll('[data-service]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.service) === index)));
}
function renderAudience(next, {updateHash = false, scroll = false} = {}) {
  audience = next;
  const path = paths[next];
  $('#path-eyebrow').textContent = path.eyebrow;
  $('#path-heading').textContent = path.heading;
  $('#path-description').textContent = path.description;
  $('#filter-label').textContent = path.filterLabel;
  $('#path-cta').textContent = path.cta;
  $('#journey-title').textContent = path.journey;
  document.querySelectorAll('[data-tab]').forEach(button => {const active = button.dataset.tab === next; button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;});
  $('#audience-panel').setAttribute('aria-labelledby',`tab-${next}`);
  document.querySelectorAll('nav [data-audience]').forEach(link => {if(link.dataset.audience === next) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current');});
  $('#path-filters').replaceChildren(...path.services.map((service,index) => {const button = document.createElement('button');button.type = 'button';button.textContent = service.label;button.dataset.service = index;button.setAttribute('aria-pressed',String(index===0));button.addEventListener('click',()=>renderService(index));return button;}));
  $('#journey-steps').replaceChildren(...path.steps.map(([title,description],index) => {const step = document.createElement('div');step.className='journey-step';const number=document.createElement('span');number.textContent=`0${index+1}`;const h=document.createElement('h4');h.textContent=title;const p=document.createElement('p');p.textContent=description;step.append(number,h,p);return step;}));
  $('#faq-list').replaceChildren(...path.faqs.map(([question,answer]) => {const detail=document.createElement('details');const summary=document.createElement('summary');summary.textContent=question;const p=document.createElement('p');p.textContent=answer;detail.append(summary,p);return detail;}));
  renderService(0);
  if(updateHash) history.pushState(null,'',`#${next}`);
  if(scroll) $('#care').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click',()=>renderAudience(button.dataset.tab,{updateHash:true}));
  button.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?'facilities':event.key==='End'?'patients':audience==='facilities'?'patients':'facilities';renderAudience(next,{updateHash:true});$(`#tab-${next}`).focus();}});
});
document.querySelectorAll('[data-audience]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();renderAudience(link.dataset.audience,{updateHash:true,scroll:true});closeMenu();}));
function applyHash(){if(location.hash==='#facilities'||location.hash==='#patients') renderAudience(location.hash.slice(1),{scroll:true});}
window.addEventListener('hashchange',applyHash);
window.addEventListener('popstate',applyHash);

function closeMenu(){ $('#navigation').classList.remove('open'); $('.menu-toggle').setAttribute('aria-expanded','false');}
$('.menu-toggle').addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#navigation a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#navigation').classList.contains('open')){closeMenu();$('.menu-toggle').focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header')) closeMenu();});

function fillInquiry(next){
  inquiryAudience=next;
  document.querySelectorAll('[data-inquiry-audience]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.inquiryAudience===next)));
  $('#inquiry-heading').textContent=next==='facilities'?'Connect your community.':'Begin with a conversation.';
  $('#inquiry-setting-label').textContent=next==='facilities'?'Your care setting':'Where are you in your care journey?';
  const settings=next==='facilities'?['Post-acute rehabilitation','Skilled nursing facility','Assisted living community','Other / discuss fit']:['Exploring a first visit','Looking for ongoing care','Supporting a family member'];
  $('#inquiry-setting').replaceChildren(...settings.map(value=>new Option(value,value)));
  $('#inquiry-interest').replaceChildren(...paths[next].interests.map(value=>new Option(value,value)));
  $('#inquiry-form').hidden=false;$('#inquiry-result').hidden=true;$('#copy-status').textContent='';
}
function openDialog(dialog,trigger){lastDialogTrigger=trigger;dialog.showModal();document.body.style.overflow='hidden';}
document.querySelectorAll('[data-inquiry]').forEach(button=>button.addEventListener('click',()=>{if(button.id==='path-cta'&&audience==='patients'){location.assign('booking.html');return;}fillInquiry(audience);closeMenu();openDialog($('#inquiry-dialog'),button);}));
document.querySelectorAll('[data-inquiry-audience]').forEach(button=>button.addEventListener('click',()=>fillInquiry(button.dataset.inquiryAudience)));
$('#privacy-button').addEventListener('click',event=>openDialog($('#privacy-dialog'),event.currentTarget));
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';lastDialogTrigger?.focus();});
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
});
$('#inquiry-form').addEventListener('submit',event=>{
  event.preventDefault();
  const setting=$('#inquiry-setting').value,interest=$('#inquiry-interest').value,path=paths[inquiryAudience];
  $('#result-heading').textContent=path.resultTitle;
  $('#result-summary').textContent=`You selected “${setting}” and “${interest}”. Here are the practical details to confirm with the practice.`;
  $('#result-checklist').replaceChildren(...path.checklist.map(value=>{const li=document.createElement('li');li.textContent=value;return li;}));
  $('#inquiry-outline').value=inquiryAudience==='facilities'?`Greetings,\n\nI represent a ${setting.toLowerCase()} and would like to discuss ${interest.toLowerCase()} with Mind Well Psychiatry Specialists. Could we review service availability, coverage needs, and the next steps for a potential partnership?\n\nThank you.`:`Greetings,\n\nI am ${setting.toLowerCase()} and would like information about ${interest.toLowerCase()} at Mind Well Psychiatry Specialists. Please let me know the appropriate next step and any availability or coverage details to confirm.\n\nThank you.`;
  $('#send-inquiry').href='mailto:'+(inquiryAudience==='facilities'?'partnerships@mindwellflorida.com':'appointments@mindwellflorida.com')+'?subject='+encodeURIComponent(inquiryAudience==='facilities'?'Facility partnership enquiry':'Patient appointment enquiry')+'&body='+encodeURIComponent($('#inquiry-outline').value);$('#inquiry-form').hidden=true;$('#inquiry-result').hidden=false;$('#result-heading').tabIndex=-1;$('#result-heading').focus();
});
$('#edit-inquiry').addEventListener('click',()=>{$('#inquiry-form').hidden=false;$('#inquiry-result').hidden=true;$('#copy-status').textContent='';$('#inquiry-setting').focus();});
$('#copy-outline').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#inquiry-outline').value);$('#copy-status').textContent='Outline copied. No inquiry has been sent.';}catch{$('#inquiry-outline').focus();$('#inquiry-outline').select();$('#copy-status').textContent='Select and copy the outline above using your device’s copy command.';}});
renderAudience('facilities');
if(location.hash==='#facilities'||location.hash==='#patients') requestAnimationFrame(applyHash);
