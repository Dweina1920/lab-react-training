function Greetings({lang, children}){
let saludo;

if(lang === "es"){
    saludo = "Hola"
}else if(lang === "de"){
    saludo ='Hallo'
}else if(lang === "en"){
    saludo ="Hello"
}else{
    saludo ="Bounjour"
}




    return(
        <div className=" border w-96 m-auto my-10 bg-yellow-50 text-left">
        <p>{saludo} {children}</p>

        </div>
    )
}
export default Greetings;