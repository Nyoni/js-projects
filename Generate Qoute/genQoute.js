(function() {
    const qoutes = [
        {
            qoute:
                "Life is too short",
            author: "Sexy Rimo"

        },
        {
            qoute:
                "Life is too short",
            author: "Demetria Mukombore"

        },
        {
            qoute:
                "Life is too short",
            author: "Juma Asid"

        }, 
        {
            qoute:
                "Life is too short",
            author: "Tafadzwa Nyoni"

        },
        {
            qoute:
                "Life is too short",
            author: "Virginia Asidi"

        },       
    ];

    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * qoutes.length);
        
        document.getElementById("qoute").textContent = qoutes[random].qoute
        document.querySelector(".author").textContent = qoutes[random].author
    });
}());