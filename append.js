const nameList = document.getElementById('name-list')
const li = document.createElement('li')
li.innerText ='i do not found any beautiful name!! :('
nameList.appendChild(li)



const container = document.getElementById('container')
const section = document.createElement('section')
section.classList.add('new-section')
section.innerHTML = `  <div>
<h1>This is the title of NEW SECTION</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis illum nesciunt dicta, distinctio dolores?</p>
<div>
<h3>Devices</h3>
<ul>
    <li>Laptop</li>
    <li>Mobile</li>
    <li>Watch</li>
    <li>Micro Phone</li>
</ul>
</div>
</div>`
container.appendChild(section)
