
const butReq = document.getElementById('butRequest');
butReq.addEventListener('click', getContacts);



const butReqx = document.getElementById('butt');
butReqx.addEventListener('click', getContactx);


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

async function getContacts() {
  const props = [];
  if (cbName.checked) props.push('name');
  if (cbTel.checked) props.push('tel');

  
  try {
    const contacts = await navigator.contacts.select(props);
    handleResults(contacts);
  } catch (ex) {
    ulResults.classList.toggle('error', true);
    ulResults.classList.toggle('success', false);
    ulResults.innerText = ex.toString();
  }

}

function handleResults(contacts , contactx) {
  ulResults.classList.toggle('success', true);
  ulResults.classList.toggle('error', false);
  ulResults.innerHTML = '';
  renderResults(contacts , contactx);
}

function enableProp(cbox) {
  cbox.removeAttribute('disabled');
  cbox.setAttribute('checked', 'checked');
}

function renderResults(contacts , contactx) {
  contacts.forEach((contact) => {
    if (contact.name) {document.getElementById('referrence1_name').setAttribute('value', contact.name)};
    if (contact.tel){document.getElementById('referrence1_contact').setAttribute('value',contact.tel)};
    
  });
  contactx.forEach((contactx) => {
    if (contactx.name) {document.getElementById('referrence2_name').setAttribute('value', contactx.name)};
    if (contactx.tel){document.getElementById('referrence2_contact').setAttribute('value',contactx.tel)};
  });
  const strContacts = JSON.stringify(contacts, null, 2);
  console.log(strContacts);
}



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

function handleResultsx(contactsx) {
  ulResultsx.classList.toggle('success', true);
  ulResultsx.classList.toggle('error', false);
  ulResultsx.innerHTML = '';
}

function enablePropx(cbox) {
  cbox.removeAttribute('disabled');
  cbox.setAttribute('checked', 'checked');
}

