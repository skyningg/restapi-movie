var url = "http://localhost:3301/api/movies";

function postMovie() {
    var myTitle = $('#title').val();
    var myDescription = $('#description').val();
    var myReleaseYear = $('#releaseYear').val();
    var myDirector = $('#director').val();
    var myGenre = $('#genre').val();
    var myDuration = $('#duration').val();
    var myImageUrl = $('#imageUrl').val();

    var myMovie = {
        title: myTitle,
        description: myDescription,
        releaseYear: myReleaseYear,
        director: myDirector,
        genre: myGenre,
        duration: myDuration,
        imageUrl: myImageUrl
    };

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado').html("Película agregada: " + JSON.stringify(data.movie));
        },
        data: JSON.stringify(myMovie)
    });
}

function getMovies() {
    $.getJSON(url, function (json) {
        console.log(json);

        var arrMovies = json.movies;
        var htmlTableMovies = '<table border="1">';
        arrMovies.forEach(function (item) {
            console.log(item);
            htmlTableMovies += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.title + '</td>' +
                '<td>' + item.description + '</td>' +
                '<td>' + item.releaseYear + '</td>' +
                '<td>' + item.director + '</td>' +
                '<td>' + item.genre + '</td>' +
                '<td>' + item.duration + '</td>' +
                '<td><img src="' + item.imageUrl + '" width="100"></td>' +
                '</tr>';
        });

        htmlTableMovies += '</table>';
        $('#resultado').html(htmlTableMovies);
    });
}
