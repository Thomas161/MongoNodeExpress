## MERN APP

**MYSQL**
**Express**
**React**
**Node**

A series of form widgets that are collated and submitted to a NodeJs/Express server, as well as stored on a MySQL DB.

### Installation

`npm install`

### Scripts

:+1:`npm run dev` => run client and express server concurrently
<br/>
:+1:`npm run client` => run client in isolation
<br/>
:+1:`npm run server` => run express server in isolation

### Issues

_I was unable to setup .env variables in Node to securely store configuration information pertaining to MySQL connection, it was not breaking so instead in server, ommiting: **host,user,password,database** information to avoid outside access_

> Proper Convention

```
HOST=[HOST VARIABLE STORED HERE]
USER=[USER VARIABLE STORED HERE]
PASSWORD=[PASSWORD STORED HERE]
DATABASE=[DATABASE NAME STORED HERE]
```
