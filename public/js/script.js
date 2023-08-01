document.addEventListener("DOMContentLoaded", function () {
    let searchBtn = document.querySelector(".searchBtn")
    let searchBar = document.querySelector(".searchBar")
    let searchInput = document.getElementById("searchInput")
    let closeSearchbar = document.getElementById("searchClose")

    // for (let i = 0; i < searchBtn.length; i++) {
    //     searchBtn.addEventListener("click", function () {
    //         searchBar.style.visibility = "visible"
    //     })
    // }

    searchBtn.addEventListener("click", function(){
        searchBar.style.visibility = "visible"
        searchBar.classList.add("open")
        this.setAttribute('true')
        searchInput.focus()
    })

    closeSearchbar.addEventListener("click", function(){
        searchBar.style.visibility = "hidden"
        searchBar.classList.remove("open")
        this.setAttribute('false')
    })

})