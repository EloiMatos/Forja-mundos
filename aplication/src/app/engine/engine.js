
//ENGINE MAIN FUNCTION
//Control data operations in aplication

import world from './worldTools'

export default function startEngine() {

    //INIT ENGINE FUNCTIONS

    let userData = manageStart(0, 'Rique', null)
    userData.worlds.push(new world('Terra', -10000, 2023))

    console.log(userData)
}

function manageStart(id, name, text) {

    //CONTROL INFORMATION GENERATION ACCORDING USERDATA

    if (text == null) {

        let data = new dataFrame(id, name)
        return data

    } else {

        //create information from JSON
    }
}
class dataFrame {

    //CREATE DATA FRAME FROM USER DATA
    
    constructor(id, name) {

        this.id = id,
            this.name = name,
            this.worlds = []
    }
}