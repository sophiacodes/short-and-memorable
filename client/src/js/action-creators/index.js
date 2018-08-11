export function upload(data) {
    return {
        type: 'UPLOAD_FILE',
        payload: {
            data
        }
    };
};