const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');
const employeeBucket = [];
const Manager = require('./classes/Manager');
const Intern = require('./classes/Intern');
const Engineer = require('./classes/Engineer');




const init = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter manager name',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'Enter manager office number',
      name: 'managerOffNumber'
    },
    {
      type: 'input',
      message: 'Enter manager email',
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: 'Enter manager ID',
      name: 'managerId'
    },
  
  ])  
  .then((m) => {
    const {managerName, managerOffNummber, managerEmail, managerId} = m
    const manager = new Manager(managerName, managerOffNummber, managerEmail, managerId)
    employeeBucket.add(manager)
    createTeam(manager)
  })
};

const createEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter engineer name',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'Enter engineer email',
      name: 'engineerEmail'
    },
    {
      type: 'input',
      message: 'Enter engineer GitHub username',
      name: 'engineerUser',
    },
    {
      type: 'input',
      message: 'Enter engineer ID',
      name: 'engineerId'
    },
  
    ])
    .then((e) => {
      const {engineerName, engineerEmail, engineerUser, engineerId} = e
      const engineer = new Engineer(engineerName, engineerEmail, engineerUser, engineerId)
      employeeBucket.add(engineer)
      createTeam(engineer)
  })
};


const createIntern = () => {

  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter intern name',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'Enter intern email',
      name: 'internEmail'
    },
    {
      type: 'input',
      message: 'Enter intern school',
      name: 'internSchool'
    },
    {
      type: 'input',
      message: 'Enter intern ID',
      name: 'internId'
    },
    ])
    .then((i) => {
      const {internName, internEmail, internSchool, internId} = i
      const intern = new Intern(internName, internEmail, internSchool, internId)
      employeeBucket.add(intern)
      createTeam(intern)
  })
};

const createTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Do you want to add someone else to the team?',
      choices: ['Intern', 'Engineer', 'No more'],
      name: 'newMember',
    }
  ]) 
  .then ((newTeamMember) => {
    switch (newTeamMember.newMember) {
      case "Engineer":
        createEngineer();
      case "Intern":
        createIntern();
      case "No more":
        addEmployee()
      }
  })
};

const addEmployee = () => {
  fs.writeFile('./dist/index.html', generateHtml(employeeBucket), (err) => err ? console.log("Please try again") : console.log('poggers it worked'))
};

init()





