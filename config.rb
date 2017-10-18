# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true,
               smartypants: true,
               gh_blockcode: true,
               tables: true,
               # 避免 Ruby 的变量 foo_bar_dar 被认为下划线
               no_intra_emphasis: true,
               underline: true,
               disable_indented_code_blocks: true,
               autolink: true,
               html: true

activate :syntax
activate :directory_indexes

configure :build do
  activate :minify_css
  activate :minify_javascript
end
