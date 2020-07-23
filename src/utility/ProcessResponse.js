function ProcessResponse(response) {
    if (response.status === 200) {
        return Promise.resolve(response);
    }
    return response.data.message
        ? Promise.reject(new Error(response.data.message))
        : Promise.reject(new Error("Something went wrong."));
}

export default ProcessResponse;
