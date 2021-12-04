
const butReq = document.getElementById('butt');
butReq.addEventListener('click', getContactx);

const cbName = document.getElementById('name');
const cbTel = document.getElementById('tel');


const ulResults = document.getElementById('results');
const preResults = document.getElementById('rawResults');

const supported = ('contacts' in navigator && 'ContactsManager' in window);

if (supported) {
  const divNotSupported = document.getElementById('notSupported');
  divNotSupported.classList.toggle('hidden', true);
  butReq.removeAttribute('disabled');
  checkProperties();
}

async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes('name')) {
    enableProp(cbName);
  }

  if (supportedProperties.includes('tel')) {
    enableProp(cbTel);
  }
}

async function getContactx() {
  const propx = [];
  if (cbName.checked) propx.push('name');
  if (cbTel.checked) propx.push('tel');

  
  try {
    const contactx = await navigator.contacts.select(propx);
    handleResults(contactx);
  } catch (ex) {
    ulResults.classList.toggle('error', true);
    ulResults.classList.toggle('success', false);
    ulResults.innerText = ex.toString();
  }

}

function handleResults(contactx) {
  ulResults.classList.toggle('success', true);
  ulResults.classList.toggle('error', false);
  ulResults.innerHTML = '';
  renderResults(contactx);
}

function enableProp(cbox) {
  cbox.removeAttribute('disabled');
  cbox.setAttribute('checked', 'checked');
}

function renderResults(contactx) {
  contactx.forEach((contact) => {
    if (contact.name) {document.getElementById('referrence2_name').setAttribute('value', contact.name)};
    if (contact.tel){document.getElementById('referrence2_contact').setAttribute('value',contact.tel)};
  });
  const strContacts = JSON.stringify(contactx, null, 2);
  console.log(strContacts);
}

