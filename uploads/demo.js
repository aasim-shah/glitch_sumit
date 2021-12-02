
const butReq = document.getElementById('butRequest');
butReq.addEventListener('click', getContacts);

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

function handleResults(contacts) {
  ulResults.classList.toggle('success', true);
  ulResults.classList.toggle('error', false);
  ulResults.innerHTML = '';
  renderResults(contacts);
}

function enableProp(cbox) {
  cbox.removeAttribute('disabled');
  cbox.setAttribute('checked', 'checked');
}


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function renderResults(contacts) {
  contacts.forEach((contact) => {
    const lines = [];
    if (contact.name) ;
    if (contact.tel) lines.push(`<b>Telephone:</b> ${contact.tel.join(', ')}`);
    lines.push(`<b>Raw:</b> <code>${JSON.stringify(contact)}</code>`);
    const li = document.createElement('li');
    li.innerHTML = lines.join('<br>');
    ulResults.appendChild(li);
  });
  const strContacts = JSON.stringify(contacts, null, 2);
  console.log(strContacts);
}
