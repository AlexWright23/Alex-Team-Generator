const generateHtml = (employeeBucket) => {
  console.log(employeeBucket)


    const createManager = manager => {
    return (`
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2">${manager.title}</h6>
            <h5 class="card-title bg-white">${manager.name}</h5>
            <p class="card-text">Office Number: ${manager.officeNum}</p>
            <p class="card-text"><a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Employee ID: ${manager.id}</p>
        </div>
    </div>
   `
  )};

  const createEngineer = engineer => {
    return (`
    
    <div class="card cardEdit" style="width: 20rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2">${engineer.title}</h6>
            <h5 class="card-title bg-white">${engineer.name}</h5>
            <a href="https://github.com/${engineer.user}" class="card-link">GitHub</a>
            <p class="card-text"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Employee ID: ${engineer.id}</p>
        </div>
    </div>
    
    `)};

        const createIntern = intern => {
    return (`
    
    <div class="card cardEdit" style="width: 20rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2">${intern.title}</h6>
            <h5 class="card-title bg-white"${intern.name}</h5>
            <p class="card-text">School: ${intern.school}</p>
            <p class="card-text"><a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">Employee ID: ${intern.id}</p>
        </div>
    </div>
    `)};

  
  module.exports = employeeBucket => {
   
    return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Team Gen</title>
        </head>
        <body class="bg-dark">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-white">Your Team</h1>
                </div>
            </div>
            <div class="container flex-wrap">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center bg-dark">
                        ${generateHtml(employeeBucket)}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `}}