const { post } = require("helpers/api_helper");

export const sendMailToUserService = async (user) => {
    try {
        const resetPasswordServiceData = {
            url: "user/reset-password",
            body: {
                UserName: user.email,
                ResetType: 0,
                ActionType: 0
            }
        }
        var response = await post(resetPasswordServiceData);
        return response;
    } catch (error) {
        return error;
    }
}

export const changePasswordService = async (data) => {
    try {
        const changePasswordSericeData = {
            url: "user/change-password",
            body: {
                Code: data.code,
                Password: data.password
            }
        }
        var response = await post(changePasswordSericeData);
        return response;
    } catch (error) {
        return error;
    }
}