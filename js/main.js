'use strict'

const cardContainer = document.getElementById('card-container')

const getStudents = async () => { 
    const url = "https://testeleonid.herokuapp.com/alunos"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const generateCard = (student) => {

    const div = document.createElement('div')

    div.innerHTML = `
        <card-student data-name="${student.nome}" data-bgcolor="${student.status}" data-team="${student.turma}" data-image="${student.foto}"></card-student>
    `

    cardContainer.appendChild(div)
}

const generateStudents = async () => {

    const students = await getStudents()
    students.map(generateCard)
}

generateStudents()
