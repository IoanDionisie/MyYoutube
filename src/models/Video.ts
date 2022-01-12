export interface Video {
    id: {
        videoId: string;
        kind: string;
    }
    snippet: {
        description: string;
        thumbnail: string;
        title: string; 
    }

}