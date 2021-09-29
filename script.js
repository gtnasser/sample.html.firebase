const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const load = () => {

    document.getElementById("del").addEventListener("click", function(event) {
        event.preventDefault()
        var id = document.getElementsByName("id")[0].value
        if (id) delCity(id)
    })

    document.getElementById("btn").addEventListener("click", function(event) {
        var _id = document.getElementsByName("id")[0].value
        var _name = document.getElementsByName("name")[0].value
        var _state = document.getElementsByName("state")[0].value
        var _country = document.getElementsByName("country")[0].value
        if (_name && _state && _country) {
            event.preventDefault()
            addCity({
                id: _id,
                name: _name,
                state: _state,
                country: _country
            })
        } 
    })

    getAllCities()
}

const submit = (event) => {
    // event.preventDefault()
    // var _id = document.getElementsByName("id")[0].value
    // var _name = document.getElementsByName("name")[0].value
    // var _state = document.getElementsByName("state")[0].value
    // var _country = document.getElementsByName("country")[0].value
    // addCity({
    //     id: _id,
    //     name: _name,
    //     state: _state,
    //     country: _country
    // })
}

const addCity = (city) => {
    // add/update document
    console.log('submit City', city);
    //city.id = city.id || 1.0 * (new Date())
    db.collection("cities")
    .doc(city.id || (1.0 * (new Date())).toString())
    .set({
        name: city.name,
        state: city.state,
        country: city.country
    })
    .then((result) => {
        console.log("Document written!")
        if (city.id) document.getElementById(city.id).remove()
        tableAdd(city.id, city)
        document.getElementById('form').reset()
    })
    .catch((error) => {
        console.error("Error writing document: ", error)
    })
}

const delCity = (id) => {
    // delete document
    console.log('del City', id);
    db.collection("cities")
    .doc(id)
    .delete()
    .then((result) => {
        console.log("Document removed!")
        document.getElementById(id).remove()
        document.getElementById('form').reset()
    })
    .catch((error) => {
        console.error("Error writing document: ", error)
    });
}

const getCity = (id) => {
    // query collection
    db.collection("cities")
    .doc(id)
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!")
        }
    })
    .catch((error) => {
        console.log("Error getting document: ", error);
    });
}

const getAllCities = () => {
    // query collection
    db.collection("cities")
    .where("name", ">", "")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tableAdd(doc.id, doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

const tableAdd = (id, city) => {
    var tbodyRef = document.getElementById('cities').getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(city.name);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(city.state);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(city.country);
    newCell.appendChild(newText);
    newRow.addEventListener("click", function(event) {
        console.log(event, id)
        document.getElementsByName("id")[0].value = id
        document.getElementsByName("name")[0].value = city.name
        document.getElementsByName("state")[0].value = city.state
        document.getElementsByName("country")[0].value = city.country
    }, false)
    newRow.id = id
}
