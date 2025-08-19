import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query.trim());
      // For now, scroll to products section
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {!isOpen ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">{t('search.placeholder')}</span>
        </Button>
      ) : (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="relative">
            <Input
              type="text"
              placeholder={t('search.placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-48 pl-8 pr-8"
              autoFocus
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};