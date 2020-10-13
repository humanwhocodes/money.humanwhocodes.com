module Jekyll
  class LiquidEscapeTagBlock < Liquid::Raw

    def initialize(tag_name, markup, tokens)
        super
    end

    def render(context)
        text = super
        replacements = {
            '{' => '&#123;',
            '}' => '&#125;'
        }

        text.gsub(Regexp.union(replacements.keys), replacements)        
    end

  end
end

Liquid::Template.register_tag('liquid_escape', Jekyll::LiquidEscapeTagBlock)
