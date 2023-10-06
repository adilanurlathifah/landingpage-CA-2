export default (context, inject) => {
    const getToken = async (url) => {
        try {
            const response = await context.$axios.$get(url);
            if (response.data) 
                return { status: true, data: response.data };
            else 
                return { status: false, message: "Token not found"};
        } catch (error) {
            const response = errorHandler(error);
            return response;
            }
        };
    const errorHandle = (error) => { 
            console.log(error);
            const response = error.response;
            let message = error.message;
            let code = 500;

            if (response) {
                code = response.status;
                message = response.data.message || response.statusText; 

            } return { 
                status: false, code, message 
        };
    };
    inject("getToken", getToken);
    inject("errorHandle", errorHandle);
}
