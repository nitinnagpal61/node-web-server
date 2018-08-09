const expect = require('expect');
const request = require('supertest');
const {ToDo} = require('./../models/todo');
const {app} = require('./../server');


// beforeEach((done)=> {
//   ToDo.remove({}).then((done)=> done());
// });

describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{

    var text = 'Test a todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }

      ToDo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=> done(e));
    });
  });

  it('should not create a new todo',(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }

      ToDo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        done();
      }).catch((e)=> done(e));
    });
  });
});
