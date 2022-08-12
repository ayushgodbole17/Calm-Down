ele1 = document.getElementById('button1');
ele1.addEventListener('click', function(){
    questions = ["What is your name?",
                "Where are you from?",
                "What is your favorite color?", 
                "What is your favorite food?",
                "What is your favorite animal?",
                "What is your favorite sport?", 
                "What is your favorite movie?",
                "What is your favorite book?",
                "What is your favorite band?",
                "What is your favorite song?",
                "What is a childhood memory you cherish?",
                "What is a memory from DPS that you cherish?",
                "What is a memory from RV that you cherish?",
                "What is a memory from MCC that you cherish?",
                "What is your earliest good memory?",
                "What, according to you, are your 3 best qualities?"];
    length = questions.length;
    random = Math.floor(Math.random() * length);
    
    str1 = questions[random];
    string = '<h1>'+str1+'</h1>'
    ele2 = document.getElementById('display')
    ele2.innerHTML = string
});




ele2 = document.getElementById('button2');
ele2.addEventListener('click', function(){
    questions = [
        "I Love You XOXO",
        "You Got This <3",
        "You're the Best <3",
        "Certified Badass <3",
        "You make my world light up like nobody else ;)",
        "Ray of Sunshine <3",
        "You're such a beautiful person, and anxiety doesn't make you any lesser",
        "Keep Going Queen <3",
        "You're so pretty!",
        "This too shall pass :)",
        "Hang in there princess <3",
        "You got this love <3",
        "Keep shining baby <3"];
    length = questions.length;
    random = Math.floor(Math.random() * length);
    
    str1 = questions[random];
    string = '<h1>'+str1+'</h1>'
    ele2 = document.getElementById('reaffirmation')
    ele2.innerHTML = string
});




let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 15000); 
}



ele4 = document.getElementById("slideshow-container");
list_srcs = ["https://drive.google.com/file/d/1ng_KDxZhx-IfaMOcq-rVkLq0TNM1aRB5/view?usp=sharing",
            "https://drive.google.com/file/d/1sp4HsB29xJaG9PQl7RXkQfxH3QKc9t9j/view?usp=sharing",
            "https://drive.google.com/file/d/1WbDWhyPdQdw1BL6Imvl7RP_YuIJZS0cS/view?usp=sharing",
            "https://drive.google.com/file/d/1OlTRsbU_rC65l3h36E_aokvBFRLtV6UC/view?usp=sharing",
            "https://drive.google.com/file/d/15ei3ZgQ5247GGcM2CVZQh_ZJ_9OgF5OV/view?usp=sharing",
            "https://drive.google.com/file/d/100bMO0UpEYQl8Ytq07jJr-RhyE_pXIe3/view?usp=sharing",
            "https://drive.google.com/file/d/100WwbbiFKQTNdkckugL-nqOQ-mWiHj49/view?usp=sharing",
            "https://drive.google.com/file/d/1-zEe46EsD88ZlYWaQnr4FXT2GnuPsE7C/view?usp=sharing",
            "https://drive.google.com/file/d/1-x0E06NQvdYwIBQQfYr8Jr6koznwifBu/view?usp=sharing",
            "https://drive.google.com/file/d/1-x0E06NQvdYwIBQQfYr8Jr6koznwifBu/view?usp=sharing",
            "https://drive.google.com/file/d/1-sSy6Kfp6gu2RG7O6I1pGHRIXclSL-dv/view?usp=sharing",
            "https://drive.google.com/file/d/1-bNVCTWMdGf9OtJmH9T6OYN5z9QMBgJh/view?usp=sharing",
            "https://drive.google.com/file/d/1-Xqt2F0x6KP7OD5te1l-p87ZggdmuPcH/view?usp=sharing",
            "https://drive.google.com/file/d/1-UZkp0X4lvdVelcHgeGLPmQyeNXWW2mR/view?usp=sharing",
            "https://drive.google.com/file/d/1-TwyHj2PPodkSLMYgwdKE5mkJd7P9JP6/view?usp=sharing",
            "https://drive.google.com/file/d/1-QbjGuoWwC9V1mA5WGwLVVdeESSY_K-I/view?usp=sharing",
            "https://drive.google.com/file/d/1-FxeZfeKUgEChXfROn6pcnbVhHjPuQv8/view?usp=sharing",
            "https://drive.google.com/file/d/1_NNRaxpblpuU5imhtj-hGL-V734_tVl6/view?usp=sharing",
            "https://drive.google.com/file/d/1znBWSd-CZjLGlGZyRhCgm7ZdZsGLy_zi/view?usp=sharing",
            "https://drive.google.com/file/d/1zjr5zSi0VrS4g7PfpRwC5IJ79ldhvrAP/view?usp=sharing",
            "https://drive.google.com/file/d/1ixbM9SxKU5JQjtEkmB1Z_c5gvkaU-EDz/view?usp=sharing",
            "https://drive.google.com/file/d/1-KQMU-eU__SMkrggWk46GQ5e_vVKmzmK/view?usp=sharing",
            "https://drive.google.com/file/d/1BPlUjOM3fQNfUOxIkSuOXQGUvcoLyiwe/view?usp=sharing",
            "https://drive.google.com/file/d/1xBXHqR69Guv8NOG8MfJDiDYQoaym5g8l/view?usp=sharing",
            "https://drive.google.com/file/d/1kceLTV_wDEtd057PK4Y4Raegq04m4STD/view?usp=sharing",
            "https://drive.google.com/file/d/1YeOm3YqEtlWMUB1N_eQ2OFXbmq8VwVkO/view?usp=sharing",
            "https://drive.google.com/file/d/1jS_oCDzatbNX6A8lZcivVNRvlDG8nxtp/view?usp=sharing",
            "https://drive.google.com/file/d/135xhgjkKj-Ly1MzJvyN2jODDKWCXpj4g/view?usp=sharing",
            "https://drive.google.com/file/d/1UupfqRmz1Gmi2iDCym6OXpnON8KNHvSp/view?usp=sharing",
            "https://drive.google.com/file/d/1iu2vqjJKx5B5xmup34MUfjiZYhhRxzhA/view?usp=sharing",
            "https://drive.google.com/file/d/1gg_fFQlDB2cCj8nts5gcBCpuLoY507Rs/view?usp=sharing",
            "https://drive.google.com/file/d/18V3ag_-wndl6rQxXCeqdq238jxHuVle_/view?usp=sharing",
            "https://drive.google.com/file/d/1C7KjO9W9RNJuvMHjCOjeHAHKOsViZxIw/view?usp=sharing",
            "https://drive.google.com/file/d/1g0qtWWqrOzmhyLOURGlcRBzk2khi1HMG/view?usp=sharing",
            "https://drive.google.com/file/d/1SKLBCli0GeN0xHSVp8hyg-WynCQ89rOv/view?usp=sharing",
            "https://drive.google.com/file/d/1LL9q56HXTxKaxmca6Lst9VOv-BEGMA_p/view?usp=sharing",
            "https://drive.google.com/file/d/1nNRTP7p6gE8M_S34dqkmiJesKJERokPZ/view?usp=sharing",
            "https://drive.google.com/file/d/1tex2yJCU-xqfXSLIpuxgKcC4fRLtpHQq/view?usp=sharing",
            "https://drive.google.com/file/d/1j82KUnjbQjINyJj5ktk9NpsYiOCHuTq7/view?usp=sharing",
            "https://drive.google.com/file/d/11fO3LraZLNrYdhAUM-sSu0__6gs3hlpM/view?usp=sharing",
            "https://drive.google.com/file/d/1j6gsil3Dn189VTQRfGV4Pk-97aw5_BDi/view?usp=sharing",
            "https://drive.google.com/file/d/1wHZb4xPUAAhMPcTGV6cd3ohwQ9QKqgbv/view?usp=sharing",
            "https://drive.google.com/file/d/1m4PA3vwdnm2ScT4HsR2UjAwCfPzrxAsc/view?usp=sharing"
];

list_srcs = shuffle(list_srcs);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

for(i=0; i<list_srcs.length; i++){
    var src = list_srcs[i].slice(32, 65)
    src2 = "https://drive.google.com/uc?export=view&id=" + src;
    console.log("SRC ", src);
    var src1 = "<div class=\"mySlides fade\"> <img src=" + src2 + " width=\"350\"  height=\"400\" > </div> "
    console.log("src1 ", src1);
    ele4.innerHTML += src1;
}
