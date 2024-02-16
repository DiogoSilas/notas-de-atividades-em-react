import axios from 'axios';

export async function fetchUserDetails(element, username) {
    try {
        // const response = await fetch(`https://api.github.com/users/${username}`)
        const response = await axios.get(`https://api.github.com/users/${username}`)

        const user = response.data;


        // if(!response.ok) {
        //     throw new Error(`GitHub API returned status code ${response.status}`)
        // }

        // const user = await response.json();
        // console.log(user)

        element.innerHTML = `
        <section>
            <img src="${user.avatar_url
            }" alt="${user.name}" />
            <h1>${user.name ?? 'No name.'}</h1>
            <p>${user.bio ?? 'Usuário não possui bio.'}</p>
        </section>
        `

    } catch(error) {
        console.error(`Error fetching GitHub user: ${error.message}`);
        element.innerHTML = `<p>Error loading user data.</p>`;
    }
}