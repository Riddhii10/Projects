const spinner = document.querySelector('.spinner');
const tbody = document.querySelector('#userListTable tbody');
const userListTable = document.querySelector('#userListTable');
async function fetchUserData() {
  const response = await fetch('https://reqres.in/api/users');
  const { data } = await response.json();
  return data;
}
function renderUserList(users) {
  tbody.innerHTML = '';
  users.forEach(user => {
    const row = tbody.insertRow();
    const idCell = row.insertCell();
    const emailCell = row.insertCell();
    const firstNameCell = row.insertCell();
    const lastNameCell = row.insertCell();
    const avatarCell = row.insertCell();

    idCell.textContent = user.id;
    emailCell.textContent = user.email;
    firstNameCell.textContent = user.first_name;
    lastNameCell.textContent = user.last_name;
    avatarCell.innerHTML = `<img src="${user.avatar}" alt="Avatar" width="50"/>`;
  });
}
(async () => {
  spinner.style.display = 'flex';
  const users = await fetchUserData();
  setTimeout(() => {
    spinner.style.display = 'none'; 
    userListTable.style.display = 'table'; 
    renderUserList(users);
  }, 2000);
})();
