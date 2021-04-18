

function renderHtml(employee) {
    //template for the end of the html file
    if (!employee) {
        return `        </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>`
    //manager template
    } else if (employee.getRole() === 'Manager') {
       return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header class='jumbotron bg-info'>
        <h1 class='text-center text-white'>My Team</h1>
    </header>
    <main class='container-fluid'>
        <div class='row justify-content-center'>

            <article class='card card-body col-12 col-md-3 m-2 shadow' style='width: 20rem'>
                <h2 class='card-title'>${employee.name}</h2>
                <h3 class='card-subtitle'>Manager</h3>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${employee.id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                    <li class='list-group-item'>Office Number: ${employee.officeNumber}</li>
                </ul>
            </article>`
        //engineer template
    } else if (employee.getRole() === 'Engineer') {
       return `            <article class='card card-body col-12 col-md-3 m-2 shadow' style='width: 20rem'>
                <h2 class='card-title'>${employee.name}</h2>
                <h3 class='card-subtitle'>Engineer</h3>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${employee.id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                    <li class='list-group-item'>Github:<a href='https://github.com/${employee.github}'>${employee.github}</a></li>
                </ul>
            </article>`
        //intern template
    } else if (employee.getRole() === 'Intern') {
       return `            <article class='card card-body col-12 col-md-3 m-2 shadow' style='width: 20rem'>
                <h2 class='card-title'>${employee.name}</h2>
                <h3 class='card-subtitle'>Intern</h3>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${employee.id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                    <li class='list-group-item'>School: ${employee.school}</li>
                </ul>
            </article>`
    } else {
       return `        </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>`
    }
}

module.exports = renderHtml