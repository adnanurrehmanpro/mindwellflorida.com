'use strict';
(() => {
  const $ = selector => document.querySelector(selector);
  const form = $('#appointment-form');
  const result = $('#appointment-result');
  const visit = $('#appointment-visit');
  const payment = $('#appointment-payment');
  payment.addEventListener('change', () => {
    const text = payment.value === 'Insurance'
      ? 'Confirm participation in your specific plan and verify benefits before scheduling. Have the front and back of your insurance card ready for the secure intake route provided by the team. Coverage is not guaranteed until verified.'
      : payment.value === 'Self-pay'
      ? 'Ask the appointments team for the current visit fee, payment options, and cancellation terms before scheduling. No payment is collected through this page.'
      : 'Our team will explain fees and coverage before your appointment.';
    const p = document.createElement('p');p.textContent=text;$('#payment-guidance').replaceChildren(p);
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!visit.value || !payment.value) { form.reportValidity(); return; }
    const message = `Greetings,\n\nI would like appointment information for ${visit.value.toLowerCase()} at Mind Well Psychiatry Specialists.\n\nPayment preference: ${payment.value}.\n\nPlease let me know the available visit options, current fees, and next steps for scheduling and secure intake.\n\nThank you.`;
    $('#appointment-outline').value = message;
    $('#appointment-email').href = 'mailto:appointments@mindwellflorida.com?subject=' + encodeURIComponent('Appointment enquiry — Mind Well Psychiatry') + '&body=' + encodeURIComponent(message);
    form.hidden = true;result.hidden = false;result.querySelector('h3').focus();
  });
  $('#appointment-edit').addEventListener('click', () => {result.hidden=true;form.hidden=false;visit.focus();});
})();
