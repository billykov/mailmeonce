app_path = ENV['RAILS_ROOT']

#listen 2008 # by default Unicorn listens on port 8080
listen "/tmp/mailmeonce-#{ENV['RAILS_ENV']}.sock"
if ENV['RAILS_ENV']=="production"
  worker_processes 5 # this should be >= nr_cpus
elsif ENV['RAILS_ENV']=="staging"
  worker_processes 3
else
  listen 4002
  worker_processes 2
end
pid "#{app_path}/tmp/pids/unicorn.pid"
stderr_path "#{app_path}/log/unicorn.log"
stdout_path "#{app_path}/log/unicorn.log"