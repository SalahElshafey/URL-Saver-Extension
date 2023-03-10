let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl=document.getElementById("delete-btn")
const ClearEl=document.getElementById("clear-btn")
const tabBtn=document.getElementById("tab-btn")
let flag =false;
localStorage.clear();
const leadsFromLocalStorage =JSON.parse((localStorage.getItem("myLeads")))
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    flag=true;
    localStorage.setItem("myLeeds",JSON.stringify(myLeads))
    render(myLeads)
    
})
deleteEl.addEventListener("click",function(){
    flag=false;
    myLeads.pop()
    render(myLeads)
})
ClearEl.addEventListener("click",function(){
    localStorage.clear();
    ulEl.innerHTML=""
    myLeads=[]
})
const tabs=[
    {url:""}
]
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


 
function render(Leads) {
    let listItems = ""
    
   
    for (let i = 0; i < Leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${Leads[i]}'>
                    ${Leads[i]}
                </a>
            </li>
         `
         ulEl.innerHTML = listItems 
    
       }
       }
