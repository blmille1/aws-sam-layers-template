let response;

exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'func1',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

if(require.main === module) {
    (async () => {
        var result = await exports.lambdaHandler();
        console.log(result);
    })();
}