const form = document.querySelector('.feedback-form');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '16px';
form.style.marginTop = '20px';
form.style.padding = '16px 16px 16px 16px';
form.style.width = '100%';
form.style.boxSizing = 'border-box';
form.style.height = 'auto';
form.style.border = 'none';
form.style.borderRadius = '4px';
form.style.fontFamily = `"Montserrat", sans - serif`;
form.style.fontSize = '16px';

const labels = document.querySelectorAll('.feedback-form label');

labels.forEach(label => {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.alignItems = 'flex-start';
  label.style.gap = '8px';
});

labels.forEach(label => {
  label.addEventListener('focus', event => {
    event.target.style.outline = 'none';
    event.target.style.border = '1px solid #000000';
  });
  label.addEventListener('blur', event => {
    event.target.style.border = '1px solid  #808080';
  });
});

const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
  input.style.border = '1px solid #808080';
  input.style.outline = 'none';

  input.addEventListener('focus', event => {
    event.target.style.outline = 'none';
    event.target.style.border = '1px solid #000000';
  });
  input.addEventListener('blur', event => {
    event.target.style.border = '1px solid #808080';
  });
});

const button = document.querySelector('.feedback-form button');

button.style.padding = '8px 16px';
button.style.fontSize = '16px';
button.style.fontFamily = `"Montserrat", sans - serif`;
button.style.fontWeight = '500';
button.style.backgroundColor = '#4e75ff';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
button.style.width = '95px';
button.style.transition = 'background-color 0.4s ease';
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#6c8cff';
});

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (e) {
    console.error('Помилка парсингу localStorage:', e);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
