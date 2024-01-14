import { io } from ".."; // this comes from index.ts
import socketUsers from "./users";
import { datetime } from "./utils";
import { Socket } from "socket.io";


export const socketHandler = (socket: Socket) => {

    socket.on("join", (params) => {

        console.log("joined", params);

        socket.leave(params.room)

        socket.join(params.room)

        socketUsers.removeUser(socket.id)

        socketUsers.addUser(socket.id, params.name, params.room)

        //console.log("all ", users.allUsers())

        io.to(params.room).emit('users-list', socketUsers.getUserList(params.room))

        socket.emit('join', {
            from: 'sistem',
            text: `Welcome to room ${params.room}!`,
            datetime: datetime()
        });

        socket.broadcast.to(params.room).emit('join', {
            from: "sistem",
            text: `${params.name} has entered the chat.`,
            datetime: datetime()
        });

    })

    socket.on('chat', (postData) => {
        console.log(postData);
        
        const user = socketUsers.getUser(socket.id);
        if (user) {
            io.to(user.room).emit('chat', {
                from: user.name,
                text: postData.text,
                datetime: postData.datetime
            })
        }
    })

    socket.on('typing', (name) => {
        const user = socketUsers.getUser(socket.id);
        if (user) {
            socket.broadcast.to(user.room).emit('typing', name)
        }
    })

    socket.on('user-disconnect', (disconnect) => {
        const user = socketUsers.removeUser(socket.id);
        socket.leave(disconnect.room)
        if (user) {
            io.to(user.room).emit('users-list', socketUsers.getUserList(user.room));
            io.to(user.room).emit('user-disconnect', {
                from: "sistem",
                text: `${disconnect.name} has left the channel.`,
                datetime: datetime()
            })
        }
    })

    socket.on('disconnect', () => {
        const user = socketUsers.removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('users-list', socketUsers.getUserList(user.room));
            io.to(user.room).emit('user-disconnect', {
                from: "sistem",
                text: `${user.name} doesn't follow the discussion.`,
                datetime: datetime()
            })
        }
    })

}
