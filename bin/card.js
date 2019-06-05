#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};
// Text + chalk definitions
const data = {
  'name': chalk.bold.white('Dominik Lindemann /'),
  'handle': chalk.cyan('dominiklindemann'),
  'work': chalk.blueBright('Founder & CTO @ MunichConsultants'),
  'twitter': chalk.cyan('https://twitter.com/DomLindemann'),
  'github': chalk.cyan('https://github.com/dominiklindemann'),
  'linkedin': chalk.cyan('https://linkedin.com/in/dominik-lindemann'),
  'xing': chalk.cyan('https://www.xing.com/profile/Dominik_Lindemann'),
  'web': chalk.cyan('http://d-lindemann.de'),
  'webMuc': chalk.cyan('http://munichConsultants.tech'),
  'npx': chalk.white('npx dominiklindemann'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelXing': chalk.white.bold('      Xing:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const xinging = `${data.labelXing}  ${data.xing}`;
const webing = `${data.labelWeb}  ${data.web}`;
const webingMuc = `${data.labelWeb}  ${data.webMuc}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + newline + twittering + newline + githubing + newline + linkedining + newline + xinging + newline + webing + newline + webingMuc + newline + newline + carding;

console.log(chalk.white(boxen(output, options)));

