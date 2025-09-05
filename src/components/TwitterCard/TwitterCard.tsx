import { useState } from "react"

export function TwitterCard({userName, name, position, avatarUrl}: {userName?: string, name?: string, position?: string, avatarUrl?: string}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const state = useState(false);
    
    return <article>
        <header>
            <img src={`https://unavatar.io/${avatarUrl}`} alt="midudev" width="120" height="120" />
            <h2>{position ?? 'Test Role'}</h2>
        </header>
        <strong>
            {userName ?? '@testUser'} - {name ?? 'Test User'}
        </strong>
        <button onClick={() => setIsFollowing(!isFollowing)}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
    </article>
}

export default TwitterCard