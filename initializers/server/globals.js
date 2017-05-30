global.__SERVER__ = true;
global.__CLIENT__ = false;
global.__DEVELOPMENT__ = (process.env.NODE_ENV || '').toLowerCase() == 'development';
