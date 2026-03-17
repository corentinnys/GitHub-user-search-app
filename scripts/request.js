$('#search').click(function (e) {
    e.preventDefault();
    let value = $('#search-input').val();
    $.ajax({
        url: 'https://api.github.com/users/' + value,
        method: 'GET',
        success: function (data) {
            $('#name').text(data.login);
            $("#repos").text(data.public_repos)
            $("#followers").text(data.followers)
            $('.user-avatar').attr('src',data.avatar_url)
            $('#website').attr('href',data.html_url)
            console.log(data);
        }
    })
})