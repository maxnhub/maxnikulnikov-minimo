function addLi() {
    const load = document.querySelector('.load');
    load.addEventListener('click', () => {
        const loader = document.getElementById('spinner');
        load.setAttribute('disabled', true);
        loader.classList.add("d-inline-block");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.html');
        xhr.onload = function() {
            if (xhr.status === 200) {
                setTimeout(function() {
                    loader.classList.remove('d-inline-block');
                    load.setAttribute('disabled', false);
                    console.log(xhr.responseText);
                    var node = document.createElement("LI");
                    node.innerHTML = xhr.responseText;
                    node.classList.add('gallery-item');
                    document.getElementById("gallery-list").appendChild(node);
                }, 1000);

            } else {
                alert('Error!');
                loader.classList.remove('d-inline-block');
                load.setAttribute('disabled', false);
                console.log(xhr.status);
            }
        };
        xhr.send();
    });
};

addLi();

function addAnotherLi() {
    const load = document.querySelector('.load');
    load.addEventListener('click', () => {
        const loader = document.getElementById('spinner');
        load.setAttribute('disabled', true);
        loader.classList.add("d-inline-block");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'data2.html');
        xhr.onload = function() {
            if (xhr.status === 200) {
                setTimeout(function() {
                    loader.classList.remove('d-inline-block');
                    load.setAttribute('disabled', false);
                    console.log(xhr.responseText);
                    var node = document.createElement("LI");
                    node.innerHTML = xhr.responseText;
                    node.classList.add('gallery-item');
                    document.getElementById("gallery-list").appendChild(node);
                }, 1000);

            } else {
                alert('Error!');
                loader.classList.remove('d-inline-block');
                load.setAttribute('disabled', false);
                console.log(xhr.status);
            }
        };
        xhr.send();
    });
};

addAnotherLi();