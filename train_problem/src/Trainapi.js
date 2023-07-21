// Function to fetch train data from the API
export async function fetchTrainData(oJnNPG) {
    try {
        const response = await fetch('http://20.244.56.144:80/train/trains', {
            headers: {
                'Authorization': `Bearer ${oJnNPG}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch train data');
        }

        const trainData = await response.json();
        return trainData;
    } catch (error) {
        throw error;
    }
}