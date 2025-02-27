function setupKeys(){
    document.body.addEventListener("keyup",function(e){
        if(e.ctrlKey || e.altKey || e.metaKey || e.shiftKey){
            return;
        }
        let link;
        if(e.key === 'Right' || e.key === 'ArrowRight'){
            link = document.querySelector(".next a");
        }
        if(e.key === 'Left' || e.key === 'ArrowLeft'){
            link = document.querySelector(".back a");
        }
        if(link){
            link.click();
        }
    })
}

let iframe = document.querySelector("iframe");
if(iframe){
    setupKeys();
    iframe.addEventListener( "load", function(e) {
        setTimeout(()=>{
            document.querySelector('a').focus();
            setupKeys();
        },100)
        setTimeout(()=>{
            document.querySelector('a').focus();
            setupKeys();
        },1000)
        setupKeys();
    });
} else {
    setupKeys();
}

hljs.initHighlightingOnLoad();