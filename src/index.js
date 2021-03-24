var gun = Gun([
    'http://localhost:8765/gun',
    'https://mvp-gun.herokuapp.com/gun',
    'https://e2eec.herokuapp.com/gun'
])

var user = gun.user()

$('#up').on('click', function(e){
    user.create($('#alias').val(), $('#pass').val())
})

$('#sign').on('submit', function(e){
    e.preventDefault()
    user.auth($('#alias').val(), $('#pass').val())
})

