const githubName = document.querySelector("#githubName")
const form =document.querySelector("#serachForm");

//nesne türettik
const github= new GitHub()

runEventListener ();
function runEventListener(){
    form.addEventListener("submit",search);

}
function search(e){
    const userName= githubName.value.trim();
    if(userName === null || userName === ""){
        alert("Lütfen bir kullanıcı adı giriniz")
    }else{
        github.getGitHubData(userName)
        .then (response => console.log(response))
        .catch(error=> console.log(error))

    }
 




    e.preventDefault()//Başka sayfaya yönlendirme yapılmaması için
}