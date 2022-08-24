document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }
})
document.getElementById('first-center').addEventListener('click', function(){
    const firstFriend = document.getElementById('first');
    firstFriend.style.textAlign = 'center';
})
document.getElementById('add-new').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>I am lorem your new friend</p>
    `
    friendContainer.appendChild(friend);
})