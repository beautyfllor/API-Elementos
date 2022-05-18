'use strict'

const getStudents = async () => {
    const url = "https://testeleonid.herokuapp.com/alunos"
    const response = await fetch(url)
    const data = await response.json()
    return data
}
