// CRUD - JAVASCRIPT - O BÁSICO:
const miniTwitter = {
    usuarios: [
        {
            username: 'ko',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'ko',
            content: 'Meu primeiro tweet',
        }
    ],
};

// CREATE
function criaPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'ko', content: 'Segundo tweet' });
console.log(miniTwitter.posts)
// READ
function pegaPosts(){
    return miniTwitter.posts;
}

// UPDATE
function atualizaContentDoPosts(id, novoContent){
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id == id;
    });
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoContent;
}
atualizaContentDoPosts(1, 'Novo conteúdo do post');
console.log(pegaPosts())

// DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
    console.log(listaDePostsAtualizada);
}
apagaPost(1);
apagaPost(2);
apagaPost(3);