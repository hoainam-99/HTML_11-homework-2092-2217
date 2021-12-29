const showFormTag = document.querySelector('.add-form')

let content = document.getElementById('content__main')

const contentListTag = document.querySelector('.content-list')


function showForm(){
    showFormTag.classList.remove('hide')
}

function hideForm(){
    showFormTag.classList.add('hide')
}

function showList(){
    contentListTag.classList.remove('hide')
}

function hideList(){
    contentListTag.classList.add('hide')
}

var docList = []

var addTag = document.getElementById('add_id')
var mainTag = document.getElementById('content__main')

var titleTag = document.getElementById('tieuDe_id')
var imgTag = document.getElementById('img_id')
var contentTag = document.getElementById('form-content_id')
var listTag = document.getElementById('content-list__edit')


function showData(){
    addTag.innerHTML = ''
    mainTag.innerHTML = ''
    listTag.innerHTML = ''
    openLocalStorage()
    for(i  = 0; i < docList.length; i++){
        addTag.innerHTML += `<li>
            <a href="#bai${i}_id">Bài ${i+1}</a>
        </li>`
        if(imgTag.value == ''){
            mainTag.innerHTML += `<li id="bai${i}_id">
                <h2>${docList[i].title}</h2>
                <p>${docList[i].content}</p>
            </li>`
        }else{
            mainTag.innerHTML += `<li>
                <h2>${docList[i].title}</h2>
                <img src="${docList[i].img}" alt="ảnh minh họa">
                <p>${docList[i].content}</p>
            </li>`
        }
        listTag.innerHTML += `<li>
            <span>${i+1}.</span>
            <p>${docList[i].title}</p>
            <button class="del-btn" onclick="deleteData(${i})">Del</button>
        </li>`
    }
}

showData()

function saveLocalStorage(){
    var json = JSON.stringify(docList)
    localStorage.setItem('docList', json)
}

function openLocalStorage(){
    var json = localStorage.getItem('docList')
    if(json != null && json != ''){
        docList = JSON.parse(json)
    }
}

function addData(){
    var doc = {
        'title' : titleTag.value,
        'img' : imgTag.value,
        'content' : contentTag.value
    }

    docList.push(doc)
    saveLocalStorage()
    showData()
    titleTag.value = ''
    imgTag.value = ''
    contentTag.value = ''
    return false
}

function deleteData(index){
    var n = confirm('Are you sure to delete this content??')
    if(!n) return

    openLocalStorage()
    docList.splice(index, 1)
    saveLocalStorage()
    showData()
}