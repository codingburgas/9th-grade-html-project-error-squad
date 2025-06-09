function showForm(formId) {
   const forms = document.querySelectorAll('.form-section');
   forms.forEach(form => {
   form.classList.remove('active');
   });
   document.getElementById(formId).classList.add('active');
}