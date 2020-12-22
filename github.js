class Github {
    constructor() {
        this.client_id = "d6504e0b1f90058302cd";
        this.client_secret = "0a47a18d7cfa91b7288f8a0cd11694a0f7b662ea";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }

    }
}