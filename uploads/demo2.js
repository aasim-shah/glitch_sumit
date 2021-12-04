
const butReqx = document.getElementById('butt');
butReqx.addEventListener('click', getContactx);

const cbNamex = document.getElementById('name');
const cbTelx = document.getElementById('tel');


const ulResultsx = document.getElementById('results');
const preResultsx = document.getElementById('rawResults');

const supportedx = ('contacts' in navigator && 'ContactsManager' in window);

if (supportedx) {
  const divNotSupportedx = document.getElementById('notSupported');
  divNotSupportedx.classList.toggle('hidden', true);
  butReqx.removeAttribute('disabled');
  checkPropertiesx();
}

async function checkPropertiesx() {
  const supportedPropertiesx = await navigator.contacts.getProperties();
  if (supportedPropertiesx.includes('name')) {
    enablePropx(cbNamex);
  }

  if (supportedPropertiesx.includes('tel')) {
    enablePropx(cbTelx);
  }
}

async function getContactx() {
  const props = [];
  if (cbNamex.checked) props.push('name');
  if (cbTelx.checked) props.push('tel');

  
  try {
    const contactsx = await navigator.contacts.select(props);
    handleResults(contactsx);
  } catch (ex) {
    ulResultsx.classList.toggle('error', true);
    ulResultsx.classList.toggle('success', false);
    ulResultsx.innerText = ex.toString();
  }

}

function handleResults(contactsx) {
  ulResultsx.classList.toggle('success', true);
  ulResultsx.classList.toggle('error', false);
  ulResultsx.innerHTML = '';
  renderResultsx(contactsx);
}

function enablePropx(cbox) {
  cbox.removeAttribute('disabled');
  cbox.setAttribute('checked', 'checked');
}

function renderResultsx(contacts) {
  contacts.forEach((contactx) => {
    if (contactx.name) {document.getElementById('referrence2_name').setAttribute('value', contactx.name)};
    if (contactx.tel){document.getElementById('referrence2_contact').setAttribute('value',contactx.tel)};
  });
  const strContacts = JSON.stringify(contacts, null, 2);
  console.log(strContacts);
}

