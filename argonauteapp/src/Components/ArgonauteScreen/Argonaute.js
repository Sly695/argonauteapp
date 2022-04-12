import React, {useState, useEffect} from 'react';
import ArgonauteCss from '../ArgonauteScreen/Argonaute.css'

const Argonaute = () => {

    const [name, setName] = useState();
    const [argonaute, setAllArgonaute] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        displayAllArgonaute()
    }, [])

    async function addArgonaute() {
        let rawResponse = await fetch(`/users/addArgonaute?name=${name}`);
        let response = await rawResponse.json();

        console.log(response)
        // if(response.result === false){
        //     setError(response.error)
        // }
        
    }

    async function displayAllArgonaute(){
        var rawResponse = await fetch("/users/allArgonaute");
        var response = await rawResponse.json();

        setAllArgonaute(response.argonaute)
    }
    
    var allArgonaute = argonaute.map(function(argonaute, i){
        return (
            <div class="member-item">{argonaute.name}</div>
        )
    })
    

    return (
            <main>
                <h2>Ajouter un(e) Argonaute</h2>
                <form class="new-member-form">
                    <label for="name">Nom de l&apos;Argonaute</label>
                    <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(arg) => setName(arg.target.value)}/>
                    <button onClick={() => addArgonaute()} type="submit">Envoyer</button>
                </form>
                {error}
                <h2>Membres de l'équipage</h2>
                <section class="member-list">
                    {allArgonaute}
                </section>
            </main>

    )
}

export default Argonaute;