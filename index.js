// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-generator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];


const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};