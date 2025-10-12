import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import { userCalls } from './Calls/userCalls.js';
import { postCalls } from './Calls/postCalls.js';
import { likeCalls } from './Calls/likeCalls.js';
import { followCalls } from './Calls/followCalls.js';
import { commentCalls } from './Calls/commentCalls.js';
import { getProtoFilePath } from './protofileName.js';

function createPackageDefinition(serviceName) {
    let protoFileName = serviceName + "Service";
    let packageDefinition = protoloader.loadSync(getProtoFilePath(protoFileName), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    return grpc.loadPackageDefinition(packageDefinition)[serviceName]; 
}

const grpcServices = {
    user: { userCalls },
    post: { postCalls },
    like: { likeCalls },
    follow: { followCalls },
    comment: { commentCalls },
}

Object.keys(grpcServices).forEach((service) => grpcServices[service][`${service}Service`] = createPackageDefinition(service));

export { grpcServices };